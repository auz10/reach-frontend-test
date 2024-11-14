## Reach Industries Frontend Assessment

**[Hosted on Vercel](https://austin-reach-frontend-test.vercel.app/#/videos/1)**

### Setup

`npm install`
`npm run dev`


### Libraries Used

- **TailwindCSS**
- **Vite**
- **DayJS**
- **HeroIcons**
- **React Router**

All of the above were mainly chosen with speed of development in mind. Given that this is an assessment task I thought it would be better to use fewer libraries without trying to make it too hard on myself.


### Things I did

- **Scrubbable video**
  - I opted to use a `canvas` element overlay to display the annotation boxes. In theory, this effect could be achieved with `svg`'s or even simple `div`'s but `canvas` is by far the most performant way to handle it.
  - Resizing the `canvas` to the dimensions of the video definitely doesn't belong where it is currently placed, this should be handled on a `resize` event listener.
- **Sidebar with list of videos**
  - Added an array of video objects that I would usually expect to receive from a backend endpoint. Given more time I would have tried to source other relevant videos and attempted some mock annotations but currently all video objects contain the same data apart from `name`, `slug` and `id`.
- **Comments Section**
  - Given the one-way nature of the socket requirement I opted to roll my own simple hook for handling the web socket, although it is lacking some of the features of a more established library. I used `DayJS` to display the timestamp of when a message was received, I briefly considered using `MomentJS` but this is a much larger library and I only required one simple feature from it.

### Things I would differently / Things I ran out of time for

- **Bespoke video controls**
  - I would have liked to have built out custom video play/pause etc buttons and a progress indicator that mapped the frame data as a "tooltip" that displayed as the video played.
- **Menu click outside to close slide in panel**
  - Theres a couple of ways to acheive this, either capture the click/touch event anywhere else on the page or to have the panel be full width but half of it transparent and add the close event there.
- **More types**
  - There could definitely be a more comprehensive use of types and I would go back and add places they are missing.
- **Routing, with React Router, was a bit of a waste of time**
  - Spent a bit too long of something that wasn't *really* required for the task and ended up leaving it in a fairly uncomplete state. I had an idea for a simple "home" page that I didn't get around to. Handling the page title via the router state was not ideal, I should have used my mock data object.
- **Comment scrolling could be handled better**
  - Turning off auto-scroll when the user scrolls is a feature I would add given more time, by catching the user scroll over the element and setting some boolean state that would be checked when a new message comes in. Add a little arrow to turn it back on.
  - Prevent it doing a massive catchup scroll when the page regains focus.
- **Wasn't completely clear what frame data to display**
  - Added the current frame dimensions to the top left corner of the video but I couldn't think of any other data that would be relevant to the user.
- **Custom hook to handle Canvas**
- **Accessibility and Tests**
- **Dockerize**



