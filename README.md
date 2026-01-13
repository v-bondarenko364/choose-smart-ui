# ChooseSmart

ChooseSmart is an application that helps with decision-making by providing insights for decisions that you've made.

## App Context & Functionality

This is Next.js app with MUI as component library, redux + redux-persist for storage
It's deployed on Vercel
The application consists of the following pages:

### Home

User can authenticate with Google provider and will be redirected to the `/record` page.

### Record

User can fill out a form with:

- Situation description
- Made decision
- Reasoning (optional)

After submission, the decision will be shown on the `/dashboard` page. After async processing, the result (completed / error) will be displayed on the dashboard page.

### Dashboard

Represents all decisions for the authenticated user with:

- Status (completed / error)
- Input user data
- Generated insights

User can click on a specific row to get a modal with more detailed information. At the bottom of the modal, there is a 'Regenerate' functionality that will regenerate insights.

## Planned functionality for future

Because lack of time I didn't complete the following functionality:

- theming (implement dark theme), and in general better styling
- request caching - through SWR and mutation
- support for pagination and sorting (since I already have all required fields for that, just need to modify endpoint with query params for that)
- better UI in context of animations, styling
- UX improvements (e.g. concise description on /record page with examples of content)

## Running Project Locally

1. Create `.env` file based on `.env.example`
   - You can get `NEXT_PUBLIC_GOOGLE_CLIENT_ID` from GCloud account (OAuth → Web client)
2. Start the app with:
   ```bash
   npm run dev
   ```

## Environments

### Production

- **Web**: [https://choosesm.art](https://choosesm.art)
- **Backend**: [https://api.choosesm.art](https://api.choosesm.art)
