import { useDispatch, useSelector } from "react-redux";
import { resetError } from "./actions/list";
import { Main } from "./App.style";
import { List } from "./components/list/list";
import { ErrorModal } from "./components/modal/errorModal";
import { ModalRoot } from "./components/modal/rootModal";
import "./styles.css";

const handleModalClose =(dispatch) => {
  dispatch(resetError());
}

export default function App() {
  const { list } = useSelector((state) => state.list);
  const state = useSelector((state) => state);
  const isError = useSelector((state) => state.list.error);
  const errorObject = useSelector((state) => state.list.errorObj);
  let errorTitle = "";
  let errorBody = "";
  
  if (errorObject && Object.keys(errorObject).length > 0)  {
    errorTitle = errorObject["title"];
    errorBody = errorObject["message"];
    console.log("Im herer");
  }
  let dispatch = useDispatch();

  return (
    <Main>
      {list.map((item, index) => {
        let { listHeading, cards, id } = item;
        return (
          <List
            key={id}
            listHeading={listHeading}
            cards={cards}
            listIndex={index}
          ></List>
        );
      })}
      <List listHeading={null} cards={[]} listIndex={list?.length} />
      <ModalRoot isOpen={isError}>
        <ErrorModal errorTitle={errorTitle} errorBody={errorBody} onClose={() => handleModalClose(dispatch)}></ErrorModal>
      </ModalRoot>
    </Main>
  );
}
