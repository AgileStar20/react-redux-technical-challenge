# React/Redux Technical challenge

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Before you start developing make sure you install all the dependencies:

```bash
> npm install
```

then simply run the project

```bash
> npm start
```

## How to take this test

The is no right or wrong way to do this, we are more interested in the code you write, the development process you use rather than marking your work! Set yourself a time limit and see how get on.

## Data

The project contains a data set describing the location and metadata of boat ramps in Australia's Gold Coast. The data set can be found under `./data/boat_ramps.geojson`.

It is a standard [GeoJSON](http://geojson.org/) file, with each feature consisting of a `geometry` and `properties`, such as owner, material that the ramp is made of, etc.

## The challenge

Your goal is to build a React and Redux-based UI to explore this data. The interface should have the following features:

1. A map capable of showing the position of all the boat ramps.
2. A 'construction material' sidebar that displays the number of ramps per material.
3. An 'area' sidebar that displays the number of ramps per area range. The ranges are `[0, 50)`, `[50, 200)`, and `[200, 526)`
4. Zooming in the map should filter the sidebar data to include only those ramps which are currently visible in the viewport.
5. When clicking on either a 'construction material' or 'area' in the sidebar, the map will filter to only show ramps for the current selection.

## Technology choices

The use of React and Redux is required. Apart from that, you are completely free to choose libraries, frameworks and tools to best assist you in this challenge. The choice of the method of serving the data to the UI is up to you,
feel free to import it from a static json file.

## Bonus Points

Serve the geojson data from a RESTful API built in the technology of your choice rather than just importing from a static json file.

## Once complete

When you've finished writing your code, please host it in a publicly accessible location (such as Github) for us to clone, along with a readme on how to run it.

### Good luck!
