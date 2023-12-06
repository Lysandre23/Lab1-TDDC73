import 'package:flutter/material.dart';

void main() {
  runApp(root());
}

class root extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Main(),
    );
  }
}

class Main extends StatefulWidget {
  @override
  _MainState createState() => _MainState();
}

class _MainState extends State<Main> {
  TextEditingController _textFieldController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Example 1'),
      ),
      body: Column(
        children: [
          Center(
            child: Image.asset(
              'assets/img.jpeg',
              // Assurez-vous de spécifier la bonne taille pour votre image
              width: 200, // Ajustez la taille selon vos besoins
              height: 200,
            ),
          ),
          // Quatre boutons disposés en carré
          Container(
            margin: EdgeInsets.symmetric(vertical: 20.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    // Action à effectuer pour le Bouton 1
                  },
                  child: Text('Button 1'),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Action à effectuer pour le Bouton 2
                  },
                  child: Text('Button 2'),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.symmetric(vertical: 20.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    // Action à effectuer pour le Bouton 3
                  },
                  child: Text('Button 3'),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Action à effectuer pour le Bouton 4
                  },
                  child: Text('Button 4'),
                ),
              ],
            ),
          ),

          // Formulaire avec un label et un input
          Container(
            padding: EdgeInsets.all(20.0),
            child: Column(
              children: [
                Text(
                  'E-mail',
                  style: TextStyle(
                    fontSize: 20.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 10.0),
                TextFormField(
                  controller: _textFieldController,
                  decoration: InputDecoration(
                    labelText: 'Write here ...',
                    border: OutlineInputBorder(),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
