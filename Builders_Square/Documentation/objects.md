# The architecture of Builders_Square

## Looking at the folder structure of the app
    1. Top Level: application.html (The html canvas), style.css (Canvas Styling)
    2. SubDirectories: Components (Explained in components.md), Systems (Explained in systems.md)
    3. Objects: All the entites we add to our world will be created using a similar architecture of : Class.js, geometries.js, materials.js, meshes.js

### Class Architecture
    1. Class.js (The entity that represents the object we intend to model)
    2. geometries.js (The 3d shape that define the structures of our entity)
    3. materials.js (The wrapping around our geometry)
    4. meshes.js (Geo + Mat = Mesh, the actual objects that can be rendered)


