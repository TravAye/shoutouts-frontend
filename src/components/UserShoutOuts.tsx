import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShoutOut from "../models/ShoutOut";
import {
  addShoutOut,
  deleteShoutOut,
  viewShoutOuts,
} from "../services/ShoutOutService";
import AddShoutOutForm from "./AddShoutOutForm";
import "./UserShoutOuts.css";
import ShoutOutsList from "./ShoutOutsList";

interface RouteParams {
  name: string;
}

const UserShoutOuts = () => {
  const { name } = useParams<RouteParams>();
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);

  useEffect(() => {
    viewShoutOutsHandler(name);
  }, [name]);

  const viewShoutOutsHandler = (name: string): void => {
    viewShoutOuts(name).then((response) => setShoutOuts(response));
  };

  const addShoutOutHandler = (shoutOut: ShoutOut): void => {
    addShoutOut(shoutOut).then(() => viewShoutOutsHandler(name));
  };

  const deleteShoutOutHandler = (id: string): void => {
    deleteShoutOut(id).then(() => {
      viewShoutOutsHandler(name);
    });
  };

  return (
    <div className="UserShoutOuts">
      <h1>Shout outs for {}</h1>
      <Link to="/">Back to All Shoutouts</Link>
      <ShoutOutsList
        shoutOuts={shoutOuts}
        deleteShoutOutHandler={deleteShoutOutHandler}
      />
      <AddShoutOutForm
        addShoutOutHandler={addShoutOutHandler}
        recipient={name}
      />
    </div>
  );
};

export default UserShoutOuts;
