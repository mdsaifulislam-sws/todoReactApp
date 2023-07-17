export default function TodoList({ item, index, deleteItem }) {
  return (
    <>
      <li className="li-item">
        <p>{item}</p>
        {/* delete adding item list button  */}
        <button
          className="delete-btn"
          onClick={() => {
            deleteItem(index);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}
