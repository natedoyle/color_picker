let paints = {'rdyl': ["Red Brick","Deep Red","Blood Red","Fire Red","Phoenix Red","Fire Orange","Marigold Yellow","Sunlight Yellow","Violet Red","Pale Violet Red","Burnt Orange","Bloodstain Red","Clotted Red","Carnage Red","Magma Red","Lava Orange","Explosion Orange","Auburn Shadow","Carrot Top Red","Highlight Orange","Saffron Sunset","Blush Pink","Big Top Red", "Punk Rock Pink"], 'blgr':["Sapphire Blue","True Blue","Sky Blue","Midnight Blue","Twilight Blue","Snow Shadow","Pine Green","Leaf Green","Pale Green","Forest Green","Grass Green","Jade Green","Muddy Olive","Olive Green","Pale Olive","Imperial Purple","Amethyst Purple","Burgundy Wine","Breonne Blue","Templar Blue","Ashen Blue","Deep Ocean","Marine Teal","Surf Aqua","Jungle Moss","Highland Moss","Pale Lichen","Ritterlich Blue","Brilliant Blue","Cyan Blue","Olive Shadow","Olive Drab","Worn Olive","Swamp Green","Military Green","Camoflage Green","Ultramarine Shadow","Ultramarine Blue","Peacock Green","Brilliant Green","Mint Green","Regal Purple","Monarch Purple", "Royal Purple"], 'brgr':["Uniform Brown","Mahogany Brown","Chestnut Brown","Rust Brown","Chestnut Gold","Palomino Gold","Buckskin Pale","Dark Shadow","Dark Skin","Dark Highlights","Muddy Brown","Earth Brown","Leather Brown","Tanned Leather","Amber Gold","Golden Blonde","Tanned Shadow","Rainy Grey","Ruddy Leather","Oiled Leather","Shadowed Stone","Stone Grey","Weathered Stone","Khaki Shadow","Terran Khaki","Faded Khaki","Walnut Brown","Blackened Brown","Intense Brown","Stained Ivory","Yellowed Bone","Dark Elf Shadow","Dark Elf Skin","Dark Elf Highlight","Woodstain Brown","Shield Brown","Driftwood Brown","Russet Brown","Harvest Brown","Orange Brown","Muddy Soil","Basic Dirt","Brown Sand", "Sandy Brown"]};

	function pickColors() {
		let color1 = paints['blgr'][Math.floor(Math.random()*paints['blgr'].length)];
		let color2 = paints['rdyl'][Math.floor(Math.random()*paints['rdyl'].length)];
		let color3 = paints['brgr'][Math.floor(Math.random()*paints['brgr'].length)];
		console.log(color1);
		console.log(color2);
		console.log(color3);
	}

pickColors()