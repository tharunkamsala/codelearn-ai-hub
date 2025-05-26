
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import TableOfContents from "@/components/TableOfContents";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("");

  // Enhanced mock blog data with markdown content
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Python: A Beginner's Guide",
      slug: "getting-started-python-beginners-guide",
      content: `
# Getting Started with Python: A Beginner's Guide

Python is one of the most popular programming languages in the world, and for good reason. It's easy to learn, versatile, and powerful. Whether you're interested in web development, data science, artificial intelligence, or just want to automate some tasks, Python is an excellent choice.

## What is Python?

Python is a high-level, interpreted programming language created by Guido van Rossum and first released in 1991. It's designed to be readable and simple, making it perfect for beginners.

> 💡 **Tip:** Python's philosophy emphasizes code readability and simplicity, following the principle "There should be one obvious way to do it."

## Installing Python

To get started with Python, you'll need to install it on your computer:

1. Visit [python.org](https://python.org)
2. Download the latest version for your operating system
3. Run the installer and follow the instructions
4. Verify installation by opening terminal and typing \`python --version\`

> ⚠️ **Warning:** Make sure to check "Add Python to PATH" during Windows installation.

## Your First Python Program

Let's write your first Python program:

\`\`\`python
print("Hello, World!")
\`\`\`

This simple program will output "Hello, World!" to the console.

## Variables and Data Types

Python supports several data types:

\`\`\`python
# String
name = "Alice"

# Integer
age = 25

# Float
height = 5.6

# Boolean
is_student = True

# List
hobbies = ["reading", "coding", "gaming"]

# Dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
\`\`\`

### String Operations

Python provides many built-in string methods:

\`\`\`python
text = "Python Programming"

# Convert to uppercase
print(text.upper())  # PYTHON PROGRAMMING

# Convert to lowercase  
print(text.lower())  # python programming

# Split into words
words = text.split()
print(words)  # ['Python', 'Programming']

# Check if string contains substring
print("Python" in text)  # True
\`\`\`

## Control Structures

### Conditional Statements

\`\`\`python
age = 18

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
\`\`\`

### Loops

Python provides two main types of loops:

\`\`\`python
# For loop
for i in range(5):
    print(f"Number: {i}")

# While loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# Loop through a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")
\`\`\`

## Functions

Functions help organize your code and make it reusable:

\`\`\`python
def greet(name, greeting="Hello"):
    """
    Greets a person with a custom message
    
    Args:
        name (str): The person's name
        greeting (str): The greeting message
    
    Returns:
        str: The formatted greeting
    """
    return f"{greeting}, {name}!"

# Function calls
print(greet("Alice"))              # Hello, Alice!
print(greet("Bob", "Hi"))          # Hi, Bob!
\`\`\`

### Lambda Functions

Python also supports lambda (anonymous) functions:

\`\`\`python
# Lambda function
square = lambda x: x ** 2
print(square(5))  # 25

# Using lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]
\`\`\`

## Object-Oriented Programming

Python supports object-oriented programming with classes:

\`\`\`python
class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade
        self.courses = []
    
    def add_course(self, course):
        self.courses.append(course)
        print(f"{self.name} enrolled in {course}")
    
    def get_info(self):
        return f"Student: {self.name}, Age: {self.age}, Grade: {self.grade}"

# Create an instance
student = Student("Alice", 16, "10th")
student.add_course("Mathematics")
student.add_course("Physics")
print(student.get_info())
\`\`\`

## Error Handling

Handle errors gracefully with try-except blocks:

\`\`\`python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("Please enter a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("Execution completed")
\`\`\`

> ✅ **Note:** Always use specific exception types when possible instead of catching all exceptions.

## Next Steps

Now that you've learned the basics, try experimenting with:

- **File I/O operations** - Reading and writing files
- **Modules and packages** - Organizing code across multiple files
- **List comprehensions** - Writing concise loops
- **Decorators** - Modifying function behavior
- **Generators** - Creating memory-efficient iterators

### Recommended Resources

1. **Official Python Tutorial**: [docs.python.org/tutorial](https://docs.python.org/3/tutorial/)
2. **Python Package Index (PyPI)**: [pypi.org](https://pypi.org)
3. **Real Python**: [realpython.com](https://realpython.com)
4. **Python.org Beginner's Guide**: [python.org/about/gettingstarted](https://python.org/about/gettingstarted/)

Happy coding! 🐍
      `,
      author: "Sarah Chen",
      date: "2024-01-15",
      tags: ["Python", "Beginner", "Programming"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts: Async/Await Explained",
      slug: "advanced-javascript-async-await",
      content: `
# Advanced JavaScript Concepts: Async/Await Explained

Asynchronous programming is a crucial concept in JavaScript. Understanding async/await will make you a better JavaScript developer and help you write cleaner, more maintainable code.

## What is Asynchronous Programming?

Asynchronous programming allows your code to perform other tasks while waiting for long-running operations to complete. This is essential in JavaScript because it's single-threaded.

> 💡 **Tip:** Think of async programming like ordering at a restaurant - you don't wait for one order to complete before taking the next one.

## The Evolution: Callbacks → Promises → Async/Await

### Callbacks (The Old Way)

\`\`\`javascript
function fetchUser(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: 'John Doe' });
  }, 1000);
}

fetchUser(1, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});
\`\`\`

### Promises (Better)

\`\`\`javascript
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: 'John Doe' });
    }, 1000);
  });
}

fetchUser(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));
\`\`\`

### Async/Await (Best)

\`\`\`javascript
async function getUser(userId) {
  try {
    const user = await fetchUser(userId);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Understanding Async Functions

An async function always returns a Promise, even if you don't explicitly return one:

\`\`\`javascript
async function example() {
  return "Hello World";
}

// This is equivalent to:
function example() {
  return Promise.resolve("Hello World");
}

example().then(result => console.log(result)); // "Hello World"
\`\`\`

## The await Keyword

The \`await\` keyword can only be used inside async functions and pauses execution until the Promise resolves:

\`\`\`javascript
async function fetchData() {
  console.log("Before await");
  
  const data = await fetch('/api/data');
  const json = await data.json();
  
  console.log("After await");
  return json;
}
\`\`\`

## Error Handling with Try/Catch

Async/await makes error handling more straightforward with try/catch blocks:

\`\`\`javascript
async function handleAsyncOperation() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw if needed
  }
}
\`\`\`

## Parallel vs Sequential Execution

### Sequential (One after another)

\`\`\`javascript
async function sequential() {
  const user = await fetchUser(1);      // 1 second
  const posts = await fetchPosts(1);    // 1 second
  const comments = await fetchComments(1); // 1 second
  
  // Total: 3 seconds
  return { user, posts, comments };
}
\`\`\`

### Parallel (All at once)

\`\`\`javascript
async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(1),      // All start simultaneously
    fetchPosts(1),     // 
    fetchComments(1)   // 
  ]);
  
  // Total: 1 second (longest operation)
  return { user, posts, comments };
}
\`\`\`

## Real-World Examples

### API Data Fetching

\`\`\`javascript
class UserService {
  static async getUser(id) {
    try {
      const response = await fetch(\`/api/users/\${id}\`);
      
      if (!response.ok) {
        throw new Error('User not found');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch user:', error);
      return null;
    }
  }
  
  static async createUser(userData) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      return await response.json();
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  }
}
\`\`\`

### File Processing

\`\`\`javascript
async function processFiles(fileList) {
  const results = [];
  
  for (const file of fileList) {
    try {
      const content = await readFile(file);
      const processed = await processContent(content);
      const saved = await saveResult(processed);
      
      results.push(saved);
    } catch (error) {
      console.error(\`Failed to process \${file}:\`, error);
    }
  }
  
  return results;
}
\`\`\`

## Common Patterns and Best Practices

### 1. Always Handle Errors

\`\`\`javascript
// ❌ Bad
async function badExample() {
  const data = await fetchData(); // Unhandled promise rejection
  return data;
}

// ✅ Good
async function goodExample() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
\`\`\`

### 2. Don't Forget to Await

\`\`\`javascript
// ❌ Bad
async function badExample() {
  const promise = fetchData(); // Returns a Promise, not data
  console.log(promise); // [object Promise]
}

// ✅ Good
async function goodExample() {
  const data = await fetchData();
  console.log(data); // Actual data
}
\`\`\`

### 3. Use Promise.all() for Parallel Operations

\`\`\`javascript
// ❌ Bad (Sequential)
async function inefficient() {
  const user = await getUser();
  const profile = await getProfile();
  const settings = await getSettings();
}

// ✅ Good (Parallel)
async function efficient() {
  const [user, profile, settings] = await Promise.all([
    getUser(),
    getProfile(),
    getSettings()
  ]);
}
\`\`\`

## Advanced Techniques

### Async Generators

\`\`\`javascript
async function* fetchPages() {
  let page = 1;
  
  while (true) {
    const response = await fetch(\`/api/data?page=\${page}\`);
    const data = await response.json();
    
    if (data.length === 0) break;
    
    yield data;
    page++;
  }
}

// Usage
for await (const page of fetchPages()) {
  console.log('Processing page:', page);
}
\`\`\`

### Retry Logic

\`\`\`javascript
async function retryOperation(operation, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      console.log(\`Attempt \${attempt} failed, retrying...\`);
      await delay(1000 * attempt); // Exponential backoff
    }
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
\`\`\`

> ⚠️ **Warning:** Be careful with infinite loops in async functions - they can cause memory leaks.

## Testing Async Code

\`\`\`javascript
// Using Jest
describe('Async function tests', () => {
  test('should fetch user data', async () => {
    const userId = 1;
    const user = await UserService.getUser(userId);
    
    expect(user).toBeDefined();
    expect(user.id).toBe(userId);
  });
  
  test('should handle errors gracefully', async () => {
    await expect(UserService.getUser(-1))
      .rejects
      .toThrow('User not found');
  });
});
\`\`\`

Keep practicing and you'll master async JavaScript! The key is understanding when to use sequential vs parallel execution and always handling errors properly.
      `,
      author: "Mike Johnson",
      date: "2024-01-12",
      tags: ["JavaScript", "Advanced", "Async"],
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Machine Learning Basics: Your First Neural Network",
      slug: "machine-learning-first-neural-network",
      content: `
# Machine Learning Basics: Your First Neural Network

Machine learning is transforming every industry, from healthcare to finance to entertainment. Let's build your first neural network and understand the fundamentals of this exciting field!

## What is Machine Learning?

Machine learning is a subset of artificial intelligence (AI) that enables computers to learn and make decisions from data without being explicitly programmed for every scenario.

> 💡 **Tip:** Think of ML as teaching a computer to recognize patterns, just like how humans learn to recognize faces or predict weather patterns.

## Types of Machine Learning

### 1. Supervised Learning
Learning with labeled examples (input-output pairs).

\`\`\`python
# Example: Predicting house prices
# Input: [bedrooms, bathrooms, square_feet, location]
# Output: price
training_data = [
    ([3, 2, 1500, 1], 250000),  # 3 bed, 2 bath, 1500 sq ft → $250k
    ([4, 3, 2000, 2], 350000),  # 4 bed, 3 bath, 2000 sq ft → $350k
]
\`\`\`

### 2. Unsupervised Learning
Finding patterns in unlabeled data.

\`\`\`python
# Example: Customer segmentation
# Group customers based on buying behavior
# No "correct" answer - just find patterns
customer_data = [
    [age, income, spending_score],
    [25, 50000, 80],
    [35, 75000, 60],
    # ... more customers
]
\`\`\`

### 3. Reinforcement Learning
Learning through trial and error with rewards/penalties.

\`\`\`python
# Example: Game AI
# Agent learns to play by receiving rewards for good moves
# and penalties for bad moves
def play_game():
    action = choose_action(current_state)
    reward = environment.step(action)
    update_strategy(reward)
\`\`\`

## Neural Networks: The Building Blocks

A neural network is inspired by how the human brain works, using interconnected nodes (neurons) to process information.

### Single Neuron

\`\`\`python
import numpy as np

def neuron(inputs, weights, bias):
    """
    A simple neuron that:
    1. Takes inputs
    2. Multiplies by weights
    3. Adds bias
    4. Applies activation function
    """
    # Weighted sum
    weighted_sum = np.dot(inputs, weights) + bias
    
    # Activation function (sigmoid)
    output = 1 / (1 + np.exp(-weighted_sum))
    
    return output

# Example usage
inputs = [1.0, 2.0, 3.0]
weights = [0.5, -0.2, 0.1]
bias = 0.5

result = neuron(inputs, weights, bias)
print(f"Neuron output: {result}")
\`\`\`

## Building Your First Neural Network

Let's use Python and TensorFlow to create a simple neural network:

### Installation

\`\`\`bash
pip install tensorflow numpy matplotlib
\`\`\`

### Basic Neural Network

\`\`\`python
import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt

# Create a simple neural network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Display model architecture
model.summary()
\`\`\`

### Training on Real Data (MNIST Digits)

\`\`\`python
# Load the MNIST dataset
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

# Preprocess the data
x_train = x_train.reshape(60000, 784).astype('float32') / 255.0
x_test = x_test.reshape(10000, 784).astype('float32') / 255.0

# Convert labels to categorical
y_train = keras.utils.to_categorical(y_train, 10)
y_test = keras.utils.to_categorical(y_test, 10)

# Train the model
history = model.fit(
    x_train, y_train,
    epochs=10,
    batch_size=32,
    validation_split=0.1,
    verbose=1
)

# Evaluate the model
test_loss, test_accuracy = model.evaluate(x_test, y_test, verbose=0)
print(f"Test accuracy: {test_accuracy:.4f}")
\`\`\`

## Understanding Key Concepts

### Activation Functions

Different functions help neurons make decisions:

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

def relu(x):
    return np.maximum(0, x)

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def tanh(x):
    return np.tanh(x)

# Visualize activation functions
x = np.linspace(-5, 5, 100)

plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
plt.plot(x, relu(x))
plt.title('ReLU')
plt.grid(True)

plt.subplot(1, 3, 2)
plt.plot(x, sigmoid(x))
plt.title('Sigmoid')
plt.grid(True)

plt.subplot(1, 3, 3)
plt.plot(x, tanh(x))
plt.title('Tanh')
plt.grid(True)

plt.tight_layout()
plt.show()
\`\`\`

### Loss Functions

How we measure how "wrong" our predictions are:

\`\`\`python
def mean_squared_error(y_true, y_pred):
    """For regression problems"""
    return np.mean((y_true - y_pred) ** 2)

def categorical_crossentropy(y_true, y_pred):
    """For classification problems"""
    # Prevent log(0) by adding small epsilon
    epsilon = 1e-15
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -np.sum(y_true * np.log(y_pred))

# Example
true_labels = [1, 0, 0]  # One-hot encoded
predictions = [0.8, 0.1, 0.1]  # Model predictions

loss = categorical_crossentropy(true_labels, predictions)
print(f"Loss: {loss}")
\`\`\`

## A Complete Example: Image Classification

Let's build a more sophisticated model for classifying images:

\`\`\`python
import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt

# Load and preprocess CIFAR-10 dataset
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.cifar10.load_data()

# Normalize pixel values
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Convert labels to categorical
num_classes = 10
y_train = tf.keras.utils.to_categorical(y_train, num_classes)
y_test = tf.keras.utils.to_categorical(y_test, num_classes)

# Build a Convolutional Neural Network
model = models.Sequential([
    # First convolutional block
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    layers.MaxPooling2D((2, 2)),
    
    # Second convolutional block
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    
    # Third convolutional block
    layers.Conv2D(64, (3, 3), activation='relu'),
    
    # Flatten and add dense layers
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(num_classes, activation='softmax')
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
history = model.fit(
    x_train, y_train,
    epochs=20,
    batch_size=32,
    validation_data=(x_test, y_test),
    verbose=1
)

# Plot training history
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.title('Model Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()

plt.tight_layout()
plt.show()
\`\`\`

## Making Predictions

\`\`\`python
# Make predictions on test data
predictions = model.predict(x_test[:10])

# Get class names
class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']

# Display predictions
for i in range(10):
    predicted_class = np.argmax(predictions[i])
    actual_class = np.argmax(y_test[i])
    confidence = np.max(predictions[i])
    
    print(f"Image {i+1}:")
    print(f"  Predicted: {class_names[predicted_class]} ({confidence:.2f})")
    print(f"  Actual: {class_names[actual_class]}")
    print()
\`\`\`

## Best Practices and Tips

### 1. Data Preprocessing

\`\`\`python
# Always normalize your data
def normalize_data(data):
    return (data - np.mean(data)) / np.std(data)

# Handle missing values
def handle_missing_values(data):
    # Option 1: Remove rows with missing values
    clean_data = data.dropna()
    
    # Option 2: Fill with mean/median
    filled_data = data.fillna(data.mean())
    
    return filled_data
\`\`\`

### 2. Avoid Overfitting

\`\`\`python
# Use dropout layers
model.add(layers.Dropout(0.5))

# Use early stopping
early_stopping = tf.keras.callbacks.EarlyStopping(
    monitor='val_loss',
    patience=5,
    restore_best_weights=True
)

# Use regularization
model.add(layers.Dense(64, activation='relu',
                      kernel_regularizer=tf.keras.regularizers.l2(0.01)))
\`\`\`

### 3. Monitor Training

\`\`\`python
# Use callbacks for monitoring
callbacks = [
    tf.keras.callbacks.EarlyStopping(patience=5),
    tf.keras.callbacks.ReduceLROnPlateau(factor=0.2, patience=3),
    tf.keras.callbacks.ModelCheckpoint('best_model.h5', save_best_only=True)
]

model.fit(x_train, y_train, callbacks=callbacks)
\`\`\`

> ⚠️ **Warning:** Start with simple models and gradually increase complexity. Complex models are harder to debug and may overfit.

## Common Pitfalls to Avoid

1. **Not enough data**: Ensure you have sufficient training data
2. **Data leakage**: Don't include future information in training
3. **Ignoring validation**: Always validate on unseen data
4. **Overfitting**: Model memorizes training data instead of learning patterns

> ✅ **Note:** The key to successful ML projects is understanding your data and starting simple before adding complexity.

## What's Next?

Now that you've built your first neural network, explore these advanced topics:

- **Deep Learning Architectures**: CNNs, RNNs, Transformers
- **Computer Vision**: Image recognition, object detection
- **Natural Language Processing**: Text analysis, chatbots
- **Reinforcement Learning**: Game AI, robotics
- **MLOps**: Deploying and monitoring ML models in production

The journey into AI starts with understanding the fundamentals - and you've just taken your first step! 🚀
      `,
      author: "Dr. Alex Kim",
      date: "2024-01-10",
      tags: ["AI", "Machine Learning", "Python"],
      readTime: "15 min read"
    }
  ];

  const blog = blogs.find(b => b.id === parseInt(id || "0"));
  const currentIndex = blogs.findIndex(b => b.id === parseInt(id || "0"));
  const nextBlog = blogs[currentIndex + 1];
  const prevBlog = blogs[currentIndex - 1];

  // Scroll spy effect for TOC
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2[id], h3[id]');
      let activeId = '';

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          activeId = heading.id;
        }
      });

      setActiveSection(activeId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <Navbar />
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-400 mb-4">Blog not found</h1>
          <Button onClick={() => navigate("/blogs")} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <Button 
          onClick={() => navigate("/blogs")}
          variant="ghost"
          className="mb-6 text-gray-300 hover:text-white hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blogs
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Left Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <TableOfContents content={blog.content} activeId={activeSection} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Blog Header */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
              <CardContent className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {blog.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700 text-blue-300 text-sm rounded-full flex items-center space-x-1"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blog Content */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
              <CardContent className="p-8">
                <MarkdownRenderer content={blog.content} />
              </CardContent>
            </Card>

            {/* Navigation to Next/Previous Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevBlog && (
                <Card 
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm cursor-pointer hover:bg-slate-700/50 transition-colors"
                  onClick={() => navigate(`/blog/${prevBlog.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <ChevronLeft className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Previous Post</p>
                        <h3 className="text-white font-medium line-clamp-2">{prevBlog.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {nextBlog && (
                <Card 
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm cursor-pointer hover:bg-slate-700/50 transition-colors"
                  onClick={() => navigate(`/blog/${nextBlog.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 text-right">
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Next Post</p>
                        <h3 className="text-white font-medium line-clamp-2">{nextBlog.title}</h3>
                      </div>
                      <ChevronRight className="h-5 w-5 text-blue-400" />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
