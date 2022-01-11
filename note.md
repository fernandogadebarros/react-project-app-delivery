## API EXPLAIN

BASE: https://api.b7web.com.br/devsfood/api | https://resttesttest.com/

GET /api/ping 

POST /api/login (email, password) | realizar login
GET */api/logout | Sair da conta

POST /api/user (name, email, password) | Criar um novo usuário 
GET */api/user | capturar info do usuário
PUT */api/user ([name, email, password, password_confirm, newaddress]) | Alterar info do usuário

GET /api/categories

GET /api/products ([search, page, category])
GET /api/product/123 

GET /api/deliverycalc ([id_address, street1, zipcode, city, state])
GET /api/cupom (code)

GET */api/user/orders
GET */api/user/order/123
POST */api/user/order (id_address, cupom, products[id, qt], payment_type, delivery_cost, delivery_time)
PUT */api/user/order/123 ([payment_data, payment_status, process_status])

Legenda:
* = endpoint precisa de auth

Formas de envio do AUTH:
- Authorization: Bearer TOKEN
- QueryString token: TOKEN