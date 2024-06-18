import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	const [arr, setArr] = useState(
		Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0))
	);
	const [isRunning, setIsRunning] = useState(false);
	const makeActive = (i, j) => {
		// if (isRunning) return;
		// setIsRunning(true);
		let newArr = Array.from({ length: 10 }, () =>
			Array.from({ length: 10 }, () => 0)
		);
		newArr[i][j] = 1;
		setArr(newArr);
		bfs(i, j);
	};
	const bfs = (i, j) => {
		let newArr = [...arr];
		let queue = [[i, j]];
		let readed = Array.from({ length: 10 }, () =>
			Array.from({ length: 10 }, () => false)
		);
		let bfs = setInterval(() => {
			let [i, j] = queue.shift();
			newArr[i][j] = 1;
			setArr(newArr);
			if (i + 1 <= 9 && !readed[i + 1][j]) {
				queue.push([i + 1, j]);
				readed[i + 1][j] = true;
			}
			if (j + 1 <= 9 && !readed[i][j + 1]) {
				queue.push([i, j + 1]);
				readed[i][j + 1] = true;
			}
			if (i - 1 >= 0 && !readed[i - 1][j]) {
				queue.push([i - 1, j]);
				readed[i - 1][j] = true;
			}
			if (j - 1 >= 0 && !readed[i][j - 1]) {
				queue.push([i, j - 1]);
				readed[i][j - 1] = true;
			}
			if (queue.length === 0) {
				setArr(
					Array.from({ length: 10 }, () =>
						Array.from({ length: 10 }, () => 0)
					)
				);
				clearInterval(bfs);
			}
		}, 100);
	};
	return (
		<div className='center col'>
			{arr.map((row, i) => {
				return (
					<div key={i + "th row"} className='row'>
						{row.map((node, j) => {
							return (
								<button
									key={i + ", " + j}
									className={`node center ${
										node === 1 ? "active" : "inactive"
									}`}
									onClick={() => makeActive(i, j)}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default App;
