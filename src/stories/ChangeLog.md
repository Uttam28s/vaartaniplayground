## for Story heirarchy :-

- xyz.stories.js
  - export default {
    title: "Components(Parent Story title)/Input(Story Name)",
    component: Input,
    };

## for Rename & Sorting Story name :-

- xyz.stories.js

  - Add this line :- Variable.storyName = 'Renamed Story Name' in bottom of file

- For Sorting
  - add this line in preview.js :-
    - options: {
      storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
      },

## Story Within story :-

- create a parant story file with stories.js extention
  - add title
    - export default {
      title: "Components/Input",
      };
      export const combineStoryName = () => (<><Componenet 1 /> <Component 2/></>)

## Decorator for styling background of view port :-

- 1. use decorate in export default and give their style for ex.
  - export default {
    title: "Components/Input",
    component: xyz,
    decorators: [story => <decoratorComp>{story()}</decoratorComp>]
    };
- 2. On All story
