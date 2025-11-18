# Angular Material Admin Dashboard

This project is a modern, responsive admin dashboard built with Angular 17+ and Angular Material. It features user management and activity log tracking, with a clean UI and modular architecture.

## Features

- **Dashboard Layout**: Sidebar navigation, top bar, and responsive two-column main content.
- **User List**: View, search, filter, paginate, add, edit, and delete users. Data is fetched from an API.
- **Activity Logs**: View login, logout, and user deletion logs. Filter by user and action type. Admins can delete logs.
- **Material UI**: Uses Angular Material for cards, tables, buttons, icons, inputs, chips, and paginator.
- **Responsive Design**: Works on desktop, tablet, and mobile. Columns stack vertically on small screens.
- **Modular Structure**: Each feature is a separate component and folder under `src/app/dashboard/`.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/jayprajapati-inventyv/Angular-Learning.git
	cd Angular-Learning
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Start the development server:
	```bash
	ng serve
	```
4. Open [http://localhost:4200](http://localhost:4200) in your browser.

## Project Structure

- `src/app/dashboard/` — Dashboard, User List, and Activity Log components
- `src/app/service/` — Service layer for user and log management
- `src/app/interface/` — TypeScript interfaces for user and log data
- `src/styles.scss` — Global styles and Material theme

## API Integration

- User List fetches data from a REST API endpoint on component initialization (see `user-list.ts`).
- Update the API URL in `user-list.ts` to match your backend.

## Customization

- Add more Material components as needed (charts, dialogs, etc.)
- Extend user and log models in `interface/`.
- Update styles in `dashboard.scss` for branding.

## Testing

- Run unit tests:
  ```bash
  ng test
  ```

## Build

- Build for production:
  ```bash
  ng build
  ```

## License

MIT
