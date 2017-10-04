<img src="https://omnirom.org/wp-content/uploads/2013/11/omnirom_logo-big_layout_transparent-250px-150x150.png" alt="omni_logo">
### Omni is about innovation, new features, transparency, community, and freedom.

## CONTRIBUTING
If you would like to contribute to our website, perform the following:

1. Fork the `dev` repo to your GitHub account (the dev branch is where we'll keep all items to be tested before rolling into `master`)
2. Create a branch for yourself that is specific to the changes you will be contributing
3. Make any changes necessary to your repo and sync to your fork on GitHub
4. Initiate a pull request from your repo on GitHub, filling in all relevant information
5. We will review your changes and comment where necessary, and if/when it is ready to be approved we will merge it into the `dev` branch

## TO DO

1. ~~Update website with content~~
2. ~~Identify correct way to do the blog~~
3. ~~Begin to move devices to "Supported Devices" section using the existing format~~
4. ~~Utilize "device_detail" page to highlight device (kernel, wiki, etc.)~~
5. Update instructions for how to contribute and test

## CREDITS

- React: https://reactjs.org/
- Redux: http://redux.js.org/
- React Router: https://reacttraining.com/react-router/
- Webpack: https://webpack.js.org/
- Jest: https://facebook.github.io/jest/
- Lodash: https://lodash.com/

## Editing meta data/head content

`index.html` contains the skeleton of the site and is used for every page. The entire application is mounted within the body, specifically the div with an `id` of `app`.

## Editing existing pages/content

Top level pages live inside `src/containers/` and should be named after the route they match (convention not the rule).

## Add a page/route

1. Navigate to `src/index.js`
2. import the container for the route (i.e. the page you want to render):
  ```javascript
    import myContainer from './containers/myContFolder/myContainer.jsx';
  ```
3. Add the route within the `<div>` inside of `<ConnectedRouter>`:

  ```javascript
  <ConnectedRouter history={history}>
    <div>
      ...// other routes
      <Route path="/mycontainer" component={myContainer}/>
    </div>
  </ConnectedRouter>
  ```

## Add a device

1. Place the device image in `src/images/phones/`
2. Navigate to `src/containers/devices/Devices.jsx`
3. Import the device image at the top:

    ```javascript
      import myDeviceName from '../../images/phones/myDeviceName.png';
    ```
4. Add a device object to the devices array:
  ```javascript
    devices = [
      ...//other devices

      {
        model: "My Device",
        make: "Google",
        image: myDeviceName,
        pageUrl: "http://dl.omnirom.org/myDevice"
      }
    ]
  ```
