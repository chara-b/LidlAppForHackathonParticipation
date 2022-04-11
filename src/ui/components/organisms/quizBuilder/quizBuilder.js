import List from "../../molecules/CList";

const ListSongs = ({ data, onClickSongHandle }) => (
  <Card>
    <div>
      <img src="../../assets/artist.png" alt="falling in reverse" />
    </div>
    <div>
      <List
        contentAlign="left"
        renderKey="title"
        onClick={onClickSongHandle}
        data={data}
      />
    </div>
  </Card>
);

ListSongs.propTypes = {
  onClickSongHandle: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
};

ListSongs.defaultProps = {
  onClickSongHandle: null,
  data: [{}],
};

export default ListSongs;
