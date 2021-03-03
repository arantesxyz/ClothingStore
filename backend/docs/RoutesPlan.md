Only logged users can see products.
Only admins can perform CRUD operations.

User registration route:

1. Send email and password
2. Validade email
3. Hash password
4. Store in database
5. Return user id and email

User Login route:

1. Send email and password
2. Validade email and check password hash
3. Send error or JWT token signed with secret (payload should be userid and if he's an admin or not)

Product creation flow:

1. Create a Product Type (e.g. T-Shirt)
2. Create Attributes (e.g. Color, Size)
3. Create Attribute values (e.g. White, Black, P, M, G)
4. Create Product Type Attributes (e.g. T-Shirt has color and size)
5. Create the product itself (e.g. Code T-Shirt)
6. Add Product Attribute values and amount available in stock (e.g. 10 available Code T-Shirt of size P and color White)
