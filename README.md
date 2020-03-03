# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `node server/server.js` for the api server. 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Home Page 

HEADER SECTION
    We have in the header the menu button, click it and it will display the 3 required pages:
        1. the home page
        2. the product page
        3. the help popup
    you can navigate through the 2 first pages but the popup will just display on top of the current page.

SHOP SECTION
    you can click on the different categories (home furnishings, accessories etc...) but it will not do anything besides selecting the clicked one.
    you can navigate through the carousel by clicking on the small dots below the pictures.
    the shop button won't do anything

INDOORS OUTDOORS, POPULAR SHOP, COLLECTION SHOP, NEWSLETTER AND FOOTER SECTIONS 
    no interactions.

## Product Page

the search icon, and sort by section have no interaction.

You can filter by the name and designer of the product.
adding filters will combine the filters with a OR condition, meaning if any of the filter is right then it will display the product.
filters are case sensitive
    ex: if we type submit Picklesuit, we will get all the Picklesuit products.
        if we add Patrick, we will get every product with the name Picklesuit and every product with the designer Patrick
you can navigate through pages via previous and next buttons.

