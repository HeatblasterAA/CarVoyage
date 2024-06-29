const ExploreCard = ({ world }) => {
  return (
    <div className="text-center w-full sm:mx-auto mt-16 shadow-xl text-gray-900 px-10 py-6 gradient-05 sm:p-8 rounded-lg border-third-color border-2px relative cursor-pointer hover:shadow-third-color">
      <div className="explore-card mx-auto w-32 h-32 relative -mt-[85px] border-white rounded-full overflow-hidden">
        <img src={world?.imgUrl} alt={world?.title || "Image"} className="object-cover object-center h-32" />
      </div>
      <div className="explore-card__content mt-6 ">
        <h2 className="text-xl font-bol text-third-color ">{world?.title}</h2>
        <p className="text-gray-500 mt-6" >{world?.description}</p>
      </div>
    </div >
  );
};

export default ExploreCard;