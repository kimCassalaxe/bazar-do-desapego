CREATE DATABASE IF NOT EXISTS bazar_luanda;
USE bazar_luanda;

CREATE TABLE users (
  user_id VARCHAR(36) PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  display_name VARCHAR(100),
  bio TEXT,
  avatar_url VARCHAR(500),
  city VARCHAR(100) DEFAULT 'Luanda',
  whatsapp VARCHAR(20),
  followers_count INT DEFAULT 0,
  avg_rating DECIMAL(3,2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  category_id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100) UNIQUE,
  slug VARCHAR(100) UNIQUE,
  icon VARCHAR(50)
);

CREATE TABLE products (
  product_id VARCHAR(36) PRIMARY KEY,
  seller_id VARCHAR(36),
  category_id VARCHAR(36),
  title VARCHAR(150) NOT NULL,
  description TEXT,
  price DECIMAL(12,2) NOT NULL,
  old_price DECIMAL(12,2),
  `condition` ENUM('novo','como_novo','bom','usado','para_pecas') DEFAULT 'bom',
  status ENUM('ativo','vendido','reservado','inativo') DEFAULT 'ativo',
  city VARCHAR(100) DEFAULT 'Luanda',
  views_count INT DEFAULT 0,
  likes_count INT DEFAULT 0,
  comments_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (seller_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE product_images (
  image_id VARCHAR(36) PRIMARY KEY,
  product_id VARCHAR(36),
  image_url VARCHAR(500) NOT NULL,
  is_primary BOOLEAN DEFAULT false,
  position INT DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

CREATE TABLE likes (
  user_id VARCHAR(36),
  product_id VARCHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, product_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

CREATE TABLE follows (
  follower_id VARCHAR(36),
  followee_id VARCHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (follower_id, followee_id),
  FOREIGN KEY (follower_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (followee_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE comments (
  comment_id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36),
  product_id VARCHAR(36),
  comment_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

CREATE TABLE conversations (
  conversation_id VARCHAR(36) PRIMARY KEY,
  product_id VARCHAR(36),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE conversation_participants (
  conversation_id VARCHAR(36),
  user_id VARCHAR(36),
  PRIMARY KEY (conversation_id, user_id),
  FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE messages (
  message_id VARCHAR(36) PRIMARY KEY,
  conversation_id VARCHAR(36),
  sender_id VARCHAR(36),
  content TEXT,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id) ON DELETE CASCADE,
  FOREIGN KEY (sender_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE notifications (
  notification_id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36),
  actor_id VARCHAR(36),
  type ENUM('like','comment','follow','message','order'),
  content TEXT,
  related_id VARCHAR(36),
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (actor_id) REFERENCES users(user_id) ON DELETE CASCADE
);