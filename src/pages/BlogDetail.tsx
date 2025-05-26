
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock blog data - in real app, this would be fetched from API
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Python: A Beginner's Guide",
      content: `
# Getting Started with Python: A Beginner's Guide

Python is one of the most popular programming languages in the world, and for good reason. It's easy to learn, versatile, and powerful. Whether you're interested in web development, data science, artificial intelligence, or just want to automate some tasks, Python is an excellent choice.

## What is Python?

Python is a high-level, interpreted programming language created by Guido van Rossum and first released in 1991. It's designed to be readable and simple, making it perfect for beginners.

## Installing Python

To get started with Python, you'll need to install it on your computer:

1. Visit [python.org](https://python.org)
2. Download the latest version for your operating system
3. Run the installer and follow the instructions

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
\`\`\`

## Next Steps

Now that you've learned the basics, try experimenting with:
- Functions
- Loops
- Conditional statements
- Lists and dictionaries

Happy coding!
      `,
      author: "Sarah Chen",
      date: "2024-01-15",
      tags: ["Python", "Beginner", "Programming"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts: Async/Await Explained",
      content: `
# Advanced JavaScript Concepts: Async/Await Explained

Asynchronous programming is a crucial concept in JavaScript. Understanding async/await will make you a better JavaScript developer.

## What is Asynchronous Programming?

Asynchronous programming allows your code to perform other tasks while waiting for long-running operations to complete.

## Promises vs Async/Await

Before async/await, we used Promises:

\`\`\`javascript
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

With async/await, the same code becomes:

\`\`\`javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Error Handling

Async/await makes error handling more straightforward with try/catch blocks.

## Best Practices

1. Always use try/catch with async/await
2. Don't forget to await your promises
3. Consider using Promise.all() for parallel operations

Keep practicing and you'll master async JavaScript!
      `,
      author: "Mike Johnson",
      date: "2024-01-12",
      tags: ["JavaScript", "Advanced", "Async"],
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Machine Learning Basics: Your First Neural Network",
      content: `
# Machine Learning Basics: Your First Neural Network

Machine learning is transforming every industry. Let's build your first neural network!

## What is Machine Learning?

Machine learning is a subset of AI that enables computers to learn without being explicitly programmed.

## Types of Machine Learning

1. **Supervised Learning**: Learning with labeled examples
2. **Unsupervised Learning**: Finding patterns in unlabeled data
3. **Reinforcement Learning**: Learning through trial and error

## Building Your First Neural Network

Let's use Python and TensorFlow:

\`\`\`python
import tensorflow as tf
from tensorflow import keras

# Create a simple neural network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
\`\`\`

## Training the Model

\`\`\`python
# Train the model
model.fit(x_train, y_train, epochs=10)
\`\`\`

## What's Next?

- Learn about different types of neural networks
- Explore deep learning frameworks
- Practice with real datasets

The journey into AI starts with a single neuron!
      `,
      author: "Dr. Alex Kim",
      date: "2024-01-10",
      tags: ["AI", "Machine Learning", "Python"],
      readTime: "15 min read"
    }
  ];

  const blog = blogs.find(b => b.id === parseInt(id || "0"));

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
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button 
          onClick={() => navigate("/blogs")}
          variant="ghost"
          className="mb-6 text-gray-300 hover:text-white hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blogs
        </Button>

        {/* Blog Header */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
          <CardContent className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
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
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <div 
              className="prose prose-invert prose-blue max-w-none
                prose-headings:text-white 
                prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-6
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                prose-code:bg-slate-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-blue-300
                prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-600
                prose-strong:text-white
                prose-ul:text-gray-300 prose-ol:text-gray-300
                prose-li:mb-2"
              dangerouslySetInnerHTML={{ 
                __html: blog.content.replace(/\n/g, '<br>').replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-slate-900 p-4 rounded-lg border border-slate-600 overflow-x-auto"><code class="text-blue-300">$2</code></pre>') 
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetail;
