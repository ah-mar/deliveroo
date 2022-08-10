# # App Description

The app is a Deliveroo clone app made in react native using expo.

## App Structure

The app initializes from App.js. The stack navigator divides the app into 5 screens

- Home Screen
- Restaurant Screen
- Basket Screen
- Preparing Order Screen
- Delivery Screen

Home Screen renders custom header, a search box and body. Body has food Categories listed in scroll view and multiple featured rows showing list of restaurants.
Categories component fetch data from CMS and show it as a map of CategoryCard component. Each categoryAcrd component render and image and text.
Home Screen fetches data from CMS and render a map of FeaturedRow component. FeaturedRow render a map of RestaurantCard components. RestaurantCard component render restaurant image and details. Clicking the RestaurantCard navigates the user to Restaurant Screen.

Restaurant Screen - render return details and a map dishes to DishRow Component. DishRow component show dish description and add and remove buttons which respectively add and remove dish to basket state. A basket row(BasketIcon component) floats on top of screen showing Basket items number and total and a button to view basket which navigate user to basket screen.
After the component mount, restaurant state is set to current restaurant and basket state is set to empty.

Basket Screen- render all the items in basket, basket summary and a button to place order. The button navigates the user to the preparing order screen.

PreparingOrderScreen simulates restaurant accepting order with a setTimeout function and a simple animation, after which the user is redirected to the delivery screen.

DeliveryScreen - render a map with restaurant marker and driver details and delivery time.

## Providers

The app use multiple Providers

- Tailwind provider for using tailwind CSS classes
- AuthProvider in React context api for authentication
- Redux Provider for state

## State Management

Redux Toolkit is used for state management. Two reducers are used in store -basket reducer and restaurant reducer.
Basket Slice has 3 reducers- emptyBasket, addToBasket and removeFromBasket.
Restaurant Slice has one reducer - setRestaurant.

## Database/ CMS

The app use Sanity CMS for backend data. The schema is organized from four document types- restaurant, dish, category and featured.
Featured have name, description and array of restaurants fields.
Category has name and image fields.
Dish has name, description, price and image fields.
Restaurant has name, description, image, latitude, longitude, address, rating, type and dishes fields.

## CSS and Styling

The app use tailwind CSS utility classes for styling. Tailwind is implemented by use of tailwindcss-react-native package. Icons are used from react-native-heroicons package.
