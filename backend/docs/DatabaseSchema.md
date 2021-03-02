User
- uid: string @pk
- email: string
- hash: string
- isAdmin: boolean

Attribute
- id: int @pk
- name: string

AttributeValue
- id: int @pk
- attributeId: int @fk
- name: string

ProductType
- id: int @pk
- name: string

ProductTypeAttribute
- id: int @pk
- productTypeId: int @fk
- attributeId: int @fk

Product
- id: int @pk
- productTypeId: int @fk
- name: string
- description: string

ProductAttributeValue
- productId: int @fk
- attributeValueId: int @fk
- amount: int
