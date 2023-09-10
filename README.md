# SOLID Principles in React

Welcome to this repository dedicated to exploring and applying SOLID principles in React! Here, you'll find clear and practical examples that will help you understand how to use these software design principles in the context of React.

## What Are the SOLID Principles?

The SOLID principles are a set of fundamental guidelines in software engineering aimed at improving code modularity and maintainability. These principles were proposed by Robert C. Martin and consist of five key concepts:

1. **S - Single Responsibility Principle (SRP):** A class/component should have only one reason to change/re-render. In other words, a class/component should have a single responsibility.

2. **O - Open/Closed Principle (OCP):** Entities (classes, modules, functions, components, etc.) should be open for extension but closed for modification. This encourages extensibility without the need to modify existing code.

3. **L - Liskov Substitution Principle (LSP):** Objects of a derived class should be able to replace objects of the base class without affecting the program's functionality.

4. **I - Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use. This results in smaller and more specific interfaces.

5. **D - Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules; both should depend on abstractions. Furthermore, details should depend on abstractions, not the other way around.

## Why Is Applying SOLID Principles Important in React?

As React projects grow in complexity, maintaining clean and well-structured code becomes essential to facilitate collaboration and software evolution. The SOLID principles provide solid guidelines for achieving this goal.

In this repository, you'll find concrete examples of how to apply each of the SOLID principles in React application development. Each example is designed to be educational and practical, accompanied by detailed explanations to help you understand how to implement these principles in your own React projects.

Each SOLID principle is structured by folder, and within each one, you will find two subfolders:
- Before: With an example before applying the specific SOLID principle.
- After: Contains the same example, but this time applying the SOLID principle in question.

We hope this repository proves valuable to you and helps enhance your skills in React application development while adhering to best software design practices. Let's dive in and start exploring and applying SOLID in React!

# EXAMPLES

## Single responsability
The Single Responsibility Principle states that a component should have
one, and only one, reason to change. This means that a component should only have one job. If it has more
than one job, it should be broken up into multiple components.
This is a very important principle to follow. It makes your components easier to understand, easier to test, and easier to maintain.

#### For example: 
We have a component that displays a list of users. It also has a button that allows the user to add a new user. This component has two jobs. It displays a list of users, and it allows the user to add a new user. This component should be broken up into two components. One component should be responsible for displaying the list of users, and another component should be responsible for allowing the user to add a new user.

## Open Closed
The Open-Closed Principle states that entities should be open for extension but closed for modification. We should be able to add new functionality to a component without altering its existing code. This principle promotes code stability and minimizes the risk of introducing bugs when extending functionality.

### For example:
Suppose we have a Card Component in our React application that displays various types of content, such as text, images, and videos. Initially, the Card Component is designed to display each type of content. However, we anticipate that in the future, we may need to display more complex content types like images or interactive elements without modifying the Card Component's existing code.


## Liskov Substitution
The Liskov Substitution Principle states represent that the substype should be intercambiable by the main type
without direct affectations.

### For example:
Let's assume we have a React component called "Button" that represents a generic button in a user interface. The "Button" has properties and methods for handling the button, such as "onClick" and "text."
Next, we create a "RedButton" component that inherits from "Button" and represents a specific red-colored button. "RedButton" inherits all the properties and methods from "Button" and can add additional behavior if necessary.
In this example, "RedButton" is a 'subtype' of "Button" that inherits all the functionalities of "Button," including the ability to handle onClick events. However, "RedButton" adds specific behavior by changing the button's color to red and the text to white.

## Interface Segregation
The Interface Segregation Principle states it suggests that a class should not be forced to implement interfaces it does not use. In the context of React components, this principle can be applied by ensuring that components only receive the props they actually need, rather than being forced to implement unnecessary props or methods.

Depending on the context, if this principle is not applied correctly, it can happen that when passing complete objects as props, the copying of that object is much larger than if it were only the props it needs. Even if the copy is shallow, meaning it's not a deep copy, it creates a new object and can give the false impression of being immutable things.

### For example:
Suppose we have a UserProfile component that displays user information, including their name, email, and profile picture. Here's how we can apply the Interface Segregation Principle by providing only the necessary props to the component:
In this example, the UserProfile component only receives the name, email, and profilePicture props it needs to render the user's information. This adheres to the Interface Segregation Principle because the component is not forced to implement unnecessary props or methods that it won't use. 

This can also help avoid unnecessary dependencies and make your components more reusable in various parts of your application.


## Dependency Inversion
The Dependency Inversion Principle states that high-level modules or components should not depend on low-level modules but should instead depend on abstractions or interfaces. In the context of React, this principle can be applied when using custom hooks to manage dependencies. 

### For example:
Let's illustrate this with a custom hook that receives a PostRepository as a dependency. Suppose you have a custom hook called usePosts in a React application. This hook is responsible for fetching and managing post data. Instead of directly instantiating the PostRepository within the hook, we'll follow the DIP and inject it as a dependency. Here's how you can do it:

1. We start by defining an abstraction or interface, PostRepository, which represents the contract for fetching posts. This class outlines the methods that any concrete implementation of a PostRepository must adhere to.

2. Next, we create the usePosts custom hook. Instead of directly creating an instance of PostRepository inside the hook, we accept it as a parameter. This adheres to the Dependency Inversion Principle, as the hook depends on the abstraction PostRepository rather than a specific implementation.

3. Within the usePostData hook, we use the injected postRepository to fetch posts. This allows us to switch between different implementations of PostRepository (e.g., one for API calls and another for local storage) without modifying the hook itself.

By following the Dependency Inversion Principle in this example, we've decoupled the usePosts hook from the specific implementation of PostRepository. This makes our code more flexible, testable, and maintainable, as we can easily swap out the implementation of PostRepository without affecting the hook's behavior.


