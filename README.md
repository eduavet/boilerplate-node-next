Setup instructions
---
1. Create a `mutable` folder where your mutable projects will be located. Only projects inside this folder will show up inside Mutable application.
2. Git clone this repository into the `mutable` folder you created.
3. In Mutable application settings, write the directory of your `mutable` folder, then hit the save button on the bottom.
![screen shot 2019-01-21 at 5 33 46 pm](https://user-images.githubusercontent.com/29226249/51477712-b62fbc80-1da2-11e9-8a64-57c7063d4d67.png)
4. In terminal, navigate inside the three folders `backend`, `frontend`, `proxy` and `npm install` them.
5. Execute `npm run build` inside `frontend` folder.
6. In terminal, open `/etc/hosts` file by `sudo nano /etc/hosts` command and add the following row at the end: `127.0.0.1 mutable.local`
7. Inside Mutable application, navigate into `boilerplate-node-next` stack, then `proxy` service, then to `Configuration` tab
![screen shot 2019-01-21 at 5 44 14 pm](https://user-images.githubusercontent.com/29226249/51478189-2db21b80-1da4-11e9-9243-5923b94d2a9c.png)
8. Add the routing settings below and hit the Save button
```
{
	"hosts": {
		"mutable.local": {
			"routes": {
				"api": {
					"target": "http://backend/[~]"
				}
			},
			"target": "http://frontend/[~]"
		}
	},
	"page404": "<html><head><style>h1{margin: auto; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100px; font-family: ‘arial’; font-weight: 100; color: #555; text-align: center; }body{background:#eee;}</style></head><body><h1>404 Not Found</h1></body></html>",
	"publish": [
		"backend",
		"frontend"
	]
}
```
9. Run `backend`, `frontend` and `proxy` services. Then open your browser and visit `mutable.local:8888`
