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
We have a component that displays a list of users. It
also has a button that allows the user to add a new user. This component has two jobs. It displays a list of users, and it allows
the user to add a new user. This component should be broken up into two
components. One component should be responsible for displaying the list
of users, and another component should be responsible for allowing the
user to add a new user.


