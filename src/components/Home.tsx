import * as React from "react";
import Layout from "./Layout";
import { codeSnippets } from "./codeSnippets";
import HighlightText from "./HighlightText";
import FixedScrollingWidget from "./FixedScrollingWidget";

export default function Home() {
  return (
    <Layout>
      <div className="post-body">
        <p>
          I've updated the starter code that we have here and as you can see we
          now have a few different components.
        </p>

        <h2>Starter HTML Code</h2>

        <div>
          <HighlightText text={codeSnippets.one} variant="code" />
        </div>

        <h2>Scss Starter Code</h2>

        <HighlightText text={codeSnippets.two} variant="code" />

        <p>
          If you look on the HTML side I've added a description, also I've added
          a sidebar div and class. And as you may have noticed it is literally
          identical to what we have right here. So something that you'll come
          across quite a bit as you're developing applications, is when you have
          identical styles or very very close to the same style that needs to be
          placed throughout an entire application and that is where we get into
          how we can leverage mixins.
        </p>

        <HighlightText
          text="If you look on the HTML side I've added a description, also I've added
          a sidebar div and class."
          variant="text"
        />

        <p>
          So let's look at the code we have here. So we have two components that
          are completely identical and one is in the sidebar. The other is there
          in the featured section. If you come inside of the nested feature
          class you can see we have a color of tomato and a nested subheading
          link with its own respective hover state. Now if you come down all the
          way down to the bottom you can see we have a sidebar class and inside
          of the sidebar class we're calling things such as the font family,
          text-align right float, and all of these kinds of components. So what
          we have here is identical but we do have a few things that we've added
          on. So this is going to show how mixins can be called. So what we're
          going to do is come into the featured section and I'm going to cut all
          of it out. And as you can see this will change just to the basic
          defaults. At the very top of the file, we are going to create a mixin
          and I'm going to call it featured and just leave it at that. And
          inside a set of curly braces, I'm going to paste in all of those
          styles.
        </p>

        <HighlightText
          text="We've talked about how variables are excellent at helping in cleaning
          up duplication but variables can only go so far when you need to be
          able to store a large amount of items or when you need to have dynamic
          behavior. That is where mixins really start to show how helpful they
          are."
          variant="text"
        />
      </div>
      <FixedScrollingWidget threshold={190}>
        <form className="form-container">
          <h3>Let's get started!</h3>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone number" />
          <button>Submit</button>
        </form>
      </FixedScrollingWidget>
    </Layout>
  );
}
