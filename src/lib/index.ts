// place files you want to import through the `$lib` alias in this folder.

// Dummy data for TILs
export interface EventCard {
	img?: string;
	title: string;
	description: string;
	status: string;
	type: string;
	state: string;
	tags: string[];
	date: string;
	author: string;
}

export const events: EventCard[] = [
	{
		img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		title: 'Orientation Day and Workshop',
		description:
			'An Orientation Day & Workshop to get you started with Blockchain technology. You will learn to make a wallet and its functions, abilities and how to use it.',
		status: 'Registration Open',
		type: 'Workshop',
		state: 'Open',
		tags: ['wallets', 'Backend', 'chain'],
		date: '23rd Novenber 2024',
		author: 'Rohan Sharon'
	}
	// {
	//     img: "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
	//     title: "Smart Contract Development",
	//     description: "Hands-on session on developing and deploying smart contracts on Ethereum.",
	//     status: "Registration Open",
	//     type: "Technical",
	//     state: "Featured",
	//     tags: ["Smart Contracts", "Ethereum", "Development"],
	//     date: "2024-02-20",
	//     author: "Jane Smith"
	// },
	// {
	//     img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
	//     title: "Crypto Trading Masterclass",
	//     description: "Master the art of cryptocurrency trading with expert insights and strategies.",
	//     status: "Limited Seats",
	//     type: "Masterclass",
	//     state: "Urgent",
	//     tags: ["Trading", "Cryptocurrency", "Finance"],
	//     date: "2024-02-25",
	//     author: "Mike Johnson"
	// }
];