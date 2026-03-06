
## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-02


---


# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Answers to the required configuration questions:

#### What is JSX, and why is it used?
**JSX** (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript/React code.
- **Why it is used:** It makes the code highly readable and easier to write by combining the UI logic and the markup structure in the same file. Under the hood, Babel transforms JSX into standard JavaScript (`React.createElement()`) calls for the browser to understand.

#### What is the difference between State and Props?
- **State** is a built-in React object that stores data or information about the component. It's mutable (can be changed over time) and managed completely *inside* the component.
- **Props** (short for properties) are used to pass data from a parent component to a child component. They are strictly *read-only* (immutable) and cannot be modified by the child component receiving them.

#### What is the `useState` hook, and how does it work?
The `useState` hook allows functional components to have their own local state. 
- **How it works:** When you call `useState(initialValue)`, it returns an array containing two elements: the current state value, and a updater function to change that state. Calling the updater function (`setYourState(newValue)`) tells React that the state has changed and triggers a re-render of the component to reflect the new state.

#### How can you share state between components in React?
1. **Lifting State Up:** Moving the state to the closest common parent of the components that need access to it, and passing it down using **props**.
2. **Context API:** Providing state to a deeply nested tree of components without having to manually pass props at every level completely.
3. **State Management Libraries:** Utilizing global state libraries like Redux, Zustand, or Recoil to store state outside the component tree.

#### How is event handling done in React?
Event handling in React is very similar to handling events on DOM elements, but with some key syntactic differences:
- React events are named using camelCase, rather than lowercase (e.g., `onClick` instead of `onclick`).
- With JSX you pass a function as the event handler, rather than a string (`onClick={handleClick}` instead of `onclick="handleClick()"`).
- Synthetic events are used under the hood, wrapping native browser events to ensure cross-browser compatibility.

---

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 



## 🧰 Required Technology Stack

- **HTML**
- **CSS** (Vanilla / Tailwind / DaisyUI)
- **JavaScript**
- **React.js** (Mandatory)

> ⚠️ **Important:** The project must be built using **React.js**. Other frameworks such as Vue are not permitted.

---

## 📌 Project Rules

- ✅ At least **5 meaningful commits** are required.
- ❌ Do not use dummy text where real data can be displayed.

---

## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE


### 📅 Deadline For 60 marks: 5th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks: 6th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 30 marks: Until the next assignment is published.


---


