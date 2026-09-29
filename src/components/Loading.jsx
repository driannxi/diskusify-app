import LoadingBar from '@dimasmds/react-redux-loading-bar';

const LoadingBarComponent = LoadingBar.default || LoadingBar;

function Loading() {
  return (
    <div className="sticky top-0 z-[100]">
      <LoadingBarComponent />
    </div>
  );
}
export default Loading;
