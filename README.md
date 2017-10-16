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
5. ~~Update instructions for how to contribute and test~~

## CREDITS

- React: https://reactjs.org/
- Redux: http://redux.js.org/
- React Router: https://reacttraining.com/react-router/
- Webpack: https://webpack.js.org/
- Jest: https://facebook.github.io/jest/
- Lodash: https://lodash.com/

## General Notes

- Global styles live in `src/globals`
- Container/component specific styles live in the same directory as their counterpart. They are imported into the jsx file at the top of the file.
- New container/component reducers must be registered in `src/redux/reducers.js`

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

## Add icons to icon font
1. Navigate to [icomoon](https://icomoon.io/app/#/select)
2. Click import Icons
3. In the file selector, navigate and select `src/fonts/icons/selection.json`
4. If a dialog pops up asking to load all settings, select Yes
5. Add any additional icons by either selecting from icomoon's library or importing your own svg
6. Hit generate font at the bottom right
7. Download/unzip the zip file and rename all of the font files inside of the `fonts` directory to icons. (e.g. `icomoon.woff` --> `icons.woff`)
8. copy/replace those files AND the `selection.json` file in the root of that unziped directory to the `src/fonts/icons` directory
9. Your new icon is now ready for use.

## Using a new icon
use `src/components/navigation/_social-media-button.scss` as a guide on how to add a css class that will allow you to leverage the a newly added icon

## Test your component/feature

[Jest](https://facebook.github.io/jest/) is the testing framework in use. In order to have your test picked up by the test runner, name your file with a spec.js extension. (e.g. `MyComponent.spec.js`).

Use one of the existing tests as a [guide](/blob/master/src/components/banner/Banner.spec.js) or read more about Jest [here](https://facebook.github.io/jest/).

## Learning Resources

1. [React Armory](https://reactarmory.com/)
2. [Learn Redux](https://learnredux.com/)
3. [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
4. [Webpack](https://webpack.js.org/concepts/)
