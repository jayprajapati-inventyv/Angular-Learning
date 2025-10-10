# Copilot Instructions for CartApp

## Project Overview
- This is an Angular 17+ application for a shopping cart/user account system.
- The codebase uses a modular structure: each feature (cart, account-settings, user-profile, etc.) is a directory under `src/app/`.
- State and user data are managed via Angular signals and a custom `UserService`.

## Key Architectural Patterns
- **Component Structure:**
  - Each feature is a folder with its own `.ts`, `.html`, and `.scss` files.
  - Example: `src/app/account-settings/user-profile/profile-pic/` contains all code for the profile picture subcomponent.
- **Service Layer:**
  - `src/app/service/user-service.ts` manages user state and exposes methods for updating user data (including profile picture updates).
  - User data is typed via `src/app/interface/user-interface.ts`.
- **Data Flow:**
  - Components inject services using Angular's `inject()` API.
  - User state is accessed via `getUser()` and updated via service methods (e.g., `updateProfilePicture`).
  - Profile images are stored as data URLs in the user object (see `profilePicture` property).

## Developer Workflows
- **Start Dev Server:** `ng serve` (see README)
- **Run Tests:** `ng test` (unit tests)
- **Build:** `ng build`
- **Generate Components:** `ng generate component <name>`

## Project-Specific Conventions
- **File Naming:**
  - Use kebab-case for folders and files (e.g., `profile-pic.ts`, `user-service.ts`).
- **Component Registration:**
  - Components use the `@Component` decorator with `selector`, `templateUrl`, and `styleUrl`.
- **Signals for State:**
  - User state is managed with Angular signals, not RxJS observables.
- **Default Images:**
  - Use a Gravatar fallback URL for missing profile pictures.
- **TypeScript Strictness:**
  - User objects may have extra properties (e.g., `profilePicture`), so check property existence before access.

## Integration Points
- No backend API integration is present; all data is local/in-memory.
- Profile picture uploads are handled as base64 data URLs and stored in the user object.

## Examples
- To update a user's profile picture:
  - Use `UserService.updateProfilePicture(dataUrl)`
  - The `ProfilePic` component will reflect the change automatically.

## Key Files
- `src/app/service/user-service.ts` — user state management
- `src/app/interface/user-interface.ts` — user type definition
- `src/app/account-settings/user-profile/profile-pic/` — profile picture component
- `README.md` — build/test/dev instructions

---

For more details, see the README or explore the `src/app/` directory for feature modules.
