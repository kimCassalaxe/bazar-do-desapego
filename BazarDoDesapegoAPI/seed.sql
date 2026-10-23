USE bazar_luanda;

-- Limpa tudo
SET FOREIGN_KEY_CHECKS=0;
TRUNCATE TABLE likes;
TRUNCATE TABLE comments;
TRUNCATE TABLE product_images;
TRUNCATE TABLE products;
TRUNCATE TABLE users;
TRUNCATE TABLE categories;
SET FOREIGN_KEY_CHECKS=1;

-- CATEGORIAS
INSERT INTO categories (category_id, name, slug, icon, display_order) VALUES
(UUID(), 'Roupas', 'roupas', '👕', 1),
(UUID(), 'Sapatos', 'sapatos', '👟', 2),
(UUID(), 'Eletrônicos', 'eletronicos', '📱', 3),
(UUID(), 'Casa & Decoração', 'casa', '🏠', 4),
(UUID(), 'Beleza', 'beleza', '💄', 5);

-- USUÁRIOS - senha de todos é: 123456
-- hash bcrypt de 123456
INSERT INTO users (user_id, username, email, password_hash, display_name, city, avatar_url, bio) VALUES
('11111111-1111-1111-1111-111111111111', 'kim_123', 'kim@teste.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Kim Cassalaxe', 'Luanda', 'https://i.pravatar.cc/150?u=kim', 'Vendedor de Luanda, Ilha'),
('22222222-2222-2222-2222-222222222222', 'ana_bela', 'ana@teste.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Ana Bela', 'Luanda', 'https://i.pravatar.cc/150?u=ana', 'Roupas femininas'),
('33333333-3333-3333-3333-333333333333', 'joao_tech', 'joao@teste.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'João Tech', 'Viana', 'https://i.pravatar.cc/150?u=joao', 'Eletrônicos importados');

-- PEGA IDs DAS CATEGORIAS
SET @cat_roupas = (SELECT category_id FROM categories WHERE slug='roupas' LIMIT 1);
SET @cat_sapatos = (SELECT category_id FROM categories WHERE slug='sapatos' LIMIT 1);
SET @cat_eletro = (SELECT category_id FROM categories WHERE slug='eletronicos' LIMIT 1);

-- PRODUTOS
INSERT INTO products (product_id, seller_id, category_id, title, description, price, city, status, condition_type, likes_count, views_count) VALUES
('a1a1a1a1-a1a1-a1a1a1a1a1a1', '11111111-1111-1111-1111-111111111111', @cat_sapatos, 'Nike Air Max 2023 - Tamanho 42', 'Pouco uso, comprei na Shoprite. Original. Caixa incluída.', 35000, 'Luanda', 'ativo', 'seminovo', 12, 156),
('b2b2b2b2-b2b2-b2b2b2b2b2b2', '22222222-2222-2222-2222-222222222222', @cat_roupas, 'Vestido Zara Floral M', 'Usei 2 vezes apenas. Perfeito para festas. Entrega no Belas Shopping', 15000, 'Talatona', 'ativo', 'seminovo', 28, 342),
('c3c3c3c3-c3c3-c3c3c3c3c3c3', '33333333-3333-3333-3333-333333333333', @cat_eletro, 'iPhone 12 128GB Preto', 'Bateria 89%, sem riscos. Com carregador e capa.', 280000, 'Viana', 'ativo', 'usado', 45, 890),
('d4d4d4d4-d4d4-d4d4d4d4d4d4', '11111111-1111-1111-1111-111111111111', @cat_roupas, 'Camisa Oficial Petro de Luanda', 'Tamanho G, nova com etiqueta', 12000, 'Luanda', 'ativo', 'novo', 5, 78);

-- IMAGENS (usa picsum pra teste)
INSERT INTO product_images (image_id, product_id, image_url, is_primary, position) VALUES
(UUID(), 'a1a1a1a1-a1a1-a1a1a1a1a1a1', 'https://picsum.photos/seed/nike1/600/600', 1, 0),
(UUID(), 'a1a1a1a1-a1a1-a1a1a1a1a1a1', 'https://picsum.photos/seed/nike2/600/600', 0, 1),
(UUID(), 'b2b2b2b2-b2b2-b2b2b2b2b2b2', 'https://picsum.photos/seed/vestido1/600/600', 1, 0),
(UUID(), 'c3c3c3c3-c3c3-c3c3-c3c3-c3c3c3c3c3c3', 'https://picsum.photos/seed/iphone1/600/600', 1, 0),
(UUID(), 'd4d4d4d4-d4d4-d4d4-d4d4-d4d4d4d4d4d4', 'https://picsum.photos/seed/petro1/600/600', 1, 0);