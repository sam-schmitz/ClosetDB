<h1>ClosetDB</h1>
<p>A REST API to add, fetch and find clothes from a MongoDB database. The database is located in a docker container. The API is made in node using express. </p>
<p>To activate the api, run server.js</p>

<h3>Parts: </h3>
<ul>
  <li>
    <h3>Server</h3>
    <p><b>Description: </b>Takes requests and returns a response. Accepts GET, POST, and DELETE requests.  </p>
    <p><b>Location: </b>server.js</p>
  </li>
  <li>
    <h3>Database Connection</h3>
    <p><b>Description: </b>Uses the mongodb library to connect to and query the database. </p>
    <p><b>Location: </b>MongoConnect.js</p>
  </li>
</ul>
