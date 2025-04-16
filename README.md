# React Tutorial Project: 07-Unsplash-images (for React Query)

## 📚 About the Project:

This project is part of the **[Complete React, Next.js & TypeScript Projects Course 2025](https://www.udemy.com/course/react-tutorial-and-projects-course/)** on Udemy.  
The course, created by [John Smilga](https://www.udemy.com/course/react-tutorial-and-projects-course/?couponCode=ST14MT150425G3#instructor-1), has a total runtime of **100 hours and 35 minutes**.

> ⚠️ **Note:** I didn’t originally create this project, but I coded most of it while following along with the tutorial lectures.  
> While building your own projects is the ultimate way to showcase your skills, coding along with tutorials is a great first step to get hands-on experience and start solidifying your knowledge.

---

## 🧠 What I applied

- React Query and React Query Dev Tools
- State management with useState and useEffect hooks.
- Global context with useContext and createContext
- Custom hooks
- enviroment variables
- Working with REST APIs and async data

---

## 🛠️ How to Run It Locally

```bash
# Create the project directory
mkdir unsplash-images

# Navigate into the project directory
cd unsplash-images

# Clone the repository
git clone https://github.com/RafaelMolyna/react-tutorial-7-unsplash-images.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

#### Unsplash Info

Unsplash is a website that provides a large collection of high-quality stock photos that are free to use. The Unsplash API is a service that allows developers to access and use Unsplash's collection of photos and related data in their own applications. The API allows developers to search, download, and use the photos in a variety of ways, such as creating photo galleries or integrating them into social media applications. The Unsplash API is widely used by developers to enhance the visual content of their applications or websites.

[Unsplash Website](https://unsplash.com/)

#### React Query Info

By default, useQuery caches the results of the API request for a certain amount of time. This can improve the performance of your application by reducing the number of requests made to the API.

When you specify the queryKey array in the options object for useQuery, you are telling the hook how to identify the data being fetched. If the queryKey array doesn't change between renders of the component, then useQuery will return the cached data instead of re-fetching it from the API.

The queryKey array is used by useQuery to identify which data the query is fetching. When the queryKey array changes, useQuery assumes that the data being fetched has changed, and it re-runs the queryFn to fetch the updated data.

In this case, searchTerm is the user's search input, and it is used to modify the API request URL. By including searchTerm in the queryKey array, you are telling useQuery to re-run the queryFn whenever the user's search input changes, in order to fetch updated data based on the new search term.

Therefore, without including searchTerm in the queryKey array, the useQuery hook would not re-fetch data when the user performs a new search.
