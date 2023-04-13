export default function Title({ title }) {
	const getLetters = () => {
		let data = [];
		for (let i = 0; i < title.length; i++) {
			i % 2 == 0
				? data.push(
						<div
							key={i}
							className="group-hover:-translate-y-1 duration-300"
						>
							{title[i]}
						</div>
				  )
				: data.push(
						<div
							key={i}
							className="group-hover:translate-y-1 duration-300"
						>
							{title[i]}
						</div>
				  );
		}
		return data;
	};

	const data = getLetters();

	return (
		<div className="title flex text-[2.4em]  md:text-[3em] text-center text-[#d946ef] group hover:text-[#6d28d9] hover:scale-x-[1.1] duration-500">
			{data}
		</div>
	);
}
