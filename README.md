### Project setup

- Clone repository
- Install required dependencies
```sh
npm install
```
- #### Backend setup
  - Create a [Supabase account](https://supabase.com/)
  - Create a project in your [Supabase Dashboard](https://supabase.com/dashboard/projects)
  - Create an env file and get the values for the below environment variables in your project settings

      ```sh
      EXPO_PUBLIC_SUPABASE_URL=
      EXPO_PUBLIC_SUPABASE_ANON=
      ```

  - Login into supabase in your project directory terminal with `npx supabase login`
  - Run `npx supabase db push` to create the required tables for the database.

### Stripe Setup
- Create a [stripe account](https://dashboard.stripe.com/register) or login if you have one already
- In your test account settings, get the values for the below environment variables below

    ```sh
      EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
      STRIPE_SECRET_KEY=
    ```
- Add the stripe environment variables to your supabase project with the below commands

   ```sh
      npx supabase secrets set STRIPE_SECRET_KEY=<your-secret-key>
      npx supabase secrets set EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-publishable-key>
   ````
  And run `npx supabase secrets list` to confirm if it's been added.


Finally, run `npm start` to run the application.