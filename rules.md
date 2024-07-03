# Our Rules

### Avoid to avoid using any in typescript if you use it write comment FIXME: using any

### Make every component stateless (no side effects) because the data will be passed as props

### try to avoid using useState & useEffect

### use default export inside pages anything else use named export

### every component has a folder (index.tsx ) and if it complex component it should be like this [example](https://ibb.co/XVP1BQd)

### inside app router use kebab case ex: about-us

### in our components use pascal case ex: ContactUs , Button

### every page describe what does it do Example:

```bash
# this is home page so we will name the function HomePage but folder name will home
export default function HomePage {
    ....
}

# this is about page so we will name the function AboutPage but folder name will about
export default function AboutPage {
    ....
}
```

### We are using Gitflow workflow if you don't know about it read this [tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### we are using Conventional Commits for naming commits so please if you don't know about it read this [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### For error handling use if condition and trow the error message in it because we are using next js error boundary
