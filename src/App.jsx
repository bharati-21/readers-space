import { LandingPage } from "features/";
import { Footer, Navbar } from "components";

function App() {
	return (
		<div className="bg-gray-100 text-gray-900 dark:bg-slate-900 dark:text-gray-100 shadow-xl">
			<Navbar />
			<div className="main h-full flex flex-col items-center justify-center min-h-[90vh]">
				<LandingPage />
			</div>
			<Footer />
		</div>
	);
}

export default App;
