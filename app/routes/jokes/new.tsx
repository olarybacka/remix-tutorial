const NewJokeRoute = () => (
  <div>
    <p>Add a joke</p>
    <form method="post">
      <div>
        <label>
          Name: <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          Content: <input type="text" name="content" />
        </label>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
);

export default NewJokeRoute;
