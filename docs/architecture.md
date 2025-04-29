      ```mermaid
      graph TD
          %% Main Application Structure
          App[Next.js Application] --> Layout[Root Layout]
          App --> Pages[Pages]
          App --> Components[Components]
          App --> Store[Redux Store]
          App --> Firebase[Firebase Services]
          App --> I18n[Internationalization]

          %% Pages Structure
          Pages --> Home[Home Page]
          Pages --> Products[Products Page]
          Pages --> Cart[Cart Page]
          Pages --> Checkout[Checkout Page]
          Pages --> Auth[Authentication]
          Pages --> Wishlist[Wishlist Page]
          Pages --> About[About Page]
          Pages --> Contact[Contact Page]

          %% Authentication Flow
          Auth --> Login[Login]
          Auth --> Signup[Signup]
          Auth --> ForgotPassword[Forgot Password]
          Auth --> ResetPassword[Reset Password]

          %% Components Structure
          Components --> UI[UI Components]
          Components --> Layout[Layout Components]
          Components --> Features[Feature Components]
          Components --> Shared[Shared Components]

          %% State Management
          Store --> CartSlice[Cart Slice]
          Store --> WishlistSlice[Wishlist Slice]
          Store --> RootReducer[Root Reducer]

          %% Firebase Services
          Firebase --> AuthService[Authentication]
          Firebase --> Database[Firestore Database]
          Firebase --> Storage[Cloud Storage]

          %% Internationalization
          I18n --> Translations[Translation Files]
          I18n --> I18nConfig[I18n Configuration]

          %% Testing Structure
          Tests[Tests] --> E2E[E2E Tests]
          Tests --> Component[Component Tests]
          Tests --> Utils[Utility Tests]

          %% Styling
          Styles[Tailwind CSS] --> Global[Global Styles]
          Styles --> Components[Component Styles]

          %% Data Flow
          subgraph Data Flow
              direction LR
              User[User] --> UI
              UI --> Store
              Store --> Firebase
              Firebase --> UI
          end

          %% Component Dependencies
          subgraph Component Dependencies
              direction TB
              Layout --> UI
              Features --> Shared
              Shared --> UI
          end

          %% State Management Flow
          subgraph State Management Flow
              direction TB
              CartSlice --> RootReducer
              WishlistSlice --> RootReducer
              RootReducer --> Store
          end

          %% Firebase Integration
          subgraph Firebase Integration
              direction TB
              AuthService --> Database
              Database --> Storage
          end

          %% Testing Coverage
          subgraph Testing Coverage
              direction TB
              E2E --> Pages
              Component --> Components
              Utils --> Utils
          end

          %% Style Definitions
          classDef default fill:#f9f9f9,stroke:#333,stroke-width:2px
          classDef service fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
          classDef component fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
          classDef store fill:#fff3e0,stroke:#f57c00,stroke-width:2px
          classDef test fill:#fce4ec,stroke:#c2185b,stroke-width:2px

          class Firebase,AuthService,Database,Storage service
          class Components,UI,Layout,Features,Shared component
          class Store,CartSlice,WishlistSlice,RootReducer store
          class Tests,E2E,Component,Utils test
