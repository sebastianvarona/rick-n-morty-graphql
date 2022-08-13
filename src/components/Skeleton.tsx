// Visual page skeleton that is displayed while the data is loading.
function Skeleton(): JSX.Element {
  return (
    <div className="animate-pulse rounded-md p-4 flex flex-col items-center">
      <div className="w-32 h-32 rounded-full bg-gray-100/10"></div>
      <div className="w-36 h-6 mt-3 bg-gray-100/10"></div>
    </div>
  );
}

export default Skeleton;
