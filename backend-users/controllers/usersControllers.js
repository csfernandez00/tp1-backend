const getUsers = (req, res) => {
	const arrUsers = [...JSON.parse(process.env.USERS)];
	const { nombre, apellido, id } = req.query;
	if (nombre || apellido || id) {
		const user = arrUsers.filter((user) => {
			return (
				user.ID == id ||
				user.Nombre.toLowerCase().includes(nombre?.toLowerCase()) ||
				user.Apellido.toLowerCase().includes(apellido?.toLowerCase())
			);
		});
		res.status(200).send(user);
		return;
	}
	res.status(200).send(arrUsers);
};

const createUser = (req, res) => {
	const arrUsers = [...JSON.parse(process.env.USERS)];
	const { ID, Nombre, Apellido, DNI } = req.body;
	const newUser = {
		ID: ID,
		Nombre: Nombre,
		Apellido: Apellido,
		DNI: DNI,
	};

	if (!ID || !Nombre || !Apellido || !DNI) {
		res.status(400).send("Faltan datos para crear el usuario!");
	} else {
		arrUsers.push(newUser);
		res
			.status(200)
			.send({ message: "Usuario Creado Exitosamente!", data: arrUsers });
	}
};

const updateUser = (req, res) => {
	let arrUsers = [...JSON.parse(process.env.USERS)];
	const { ID, Nombre, Apellido, DNI } = req.body;
	const updatedUser = {
		ID: ID,
		Nombre: Nombre,
		Apellido: Apellido,
		DNI: DNI,
	};
	if (!ID || !Nombre || !Apellido || !DNI) {
		res.status(401).send({ message: "Faltan datos para crear el usuario!" });
		return;
	}
	const userIndex = arrUsers.findIndex((user) => user.ID === ID);
	let newArr = [...arrUsers];
	newArr[userIndex] = {
		...newArr[userIndex],
		Nombre: updatedUser.Nombre,
		Apellido: updatedUser.Apellido,
		DNI: updatedUser.DNI,
	};
	arrUsers = newArr;

	res
		.status(200)
		.send({ message: "Usuario actualizado exitosamente!", data: arrUsers });
};

const deleteUser = (req, res) => {
	const arrUsers = [...JSON.parse(process.env.USERS)];
	const id = req?.params.id;
	const newArr = [];
	if (!id) {
		res
			.status(401)
			.send({ message: "Se necesita indicar un id para eliminar un usuario!" });
		return;
	}
	for (let user of arrUsers) {
		if (user.ID != id) {
			newArr.push(user);
		}
	}
	res
		.status(200)
		.send({ message: "Usuario eliminado exitosamente!", data: newArr });
};

module.exports = {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
};
