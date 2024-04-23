# Restaurant Finder (React + TypeScript + Vite)

## How to run Application

To run the application locally, run `npm run dev` on the terminal.

## Points that needed clarification

While fetching the data, I encountered a challenge with the rating key containing three types of numbers. Upon consultation with Maria, clarification was swiftly provided, confirming that the "startRating" should be used. This clarification ensured the accuracy of the data for analysis and subsequent actions.

During the exploration of UK postcodes, it became apparent that they cover only a few blocks, leading to confusion when encountering restaurants with different postcodes. Further research revealed that postcodes vary by area, enhancing my understanding of UK geography, which is beneficial for work-related purposes.

When deciding between Tailwind and styled-components for project CSS, I carefully evaluated their respective advantages and disadvantages. Ultimately, styled-components was selected due to its readability, familiarity, and alignment with my coding style and project requirements.

## Improvement opportunities

One aspect I would focus on improving would be the "Loading" message displayed while fetching restaurant data. Recognizing the trend among major companies, I would replace this message with skeleton loaders, a more user-friendly loading technique. This enhancement is aligned with my goal of providing a smoother user experience.

Although the project asked to display only 10 results, I would suggest that we show all options in segments of 10. This would require implementing pagination. This could be done with properties that come with react-query. Implementing pagination with react-query would elevate the user interface, making it easier for users to navigate through all available options.

Another improvement would be adding a tooltip component to enhance user experience, this would particularly help with copying postcodes, replacing the current alert() function. This change would offer a more intuitive experience by letting the user know what exactly they are hovering over.
