//[Dang] [Mai-Nhien] [7888307821]
#include <vector>
#include <fstream>
#include <string>
#include <iostream>
// put other includes here
using namespace std;

// Please fill in your USC username
const string USCusername = "mainhied";

int stealingGold(vector<int> w)
{
	int size = w.size();
	if(size == 0){
		return 0;
	}
	if(size == 1){
		return w[0];
	}
	if(size == 2){
		return max(w[0], w[1]);
	}

	int value1[size-1];
	int value2[size-1];

	//Case where we choose the first
	value1[0] = w[0];
	value1[1] = max(w[0], w[1]);
	for(int i = 2; i < size-1; i++){
		value1[i] = max(value1[i-1], w[i]+value1[i-2]);
	}

	//Case where we choose the last cave
	value2[0] = w[1];
	value2[1] = max(w[1], w[2]);
	for(int i = 2; i < size-1; i++){
		value2[i] = max(value2[i-1], w[i+1]+value2[i-2]);
	}

	return max(value1[size-2], value2[size-2]);
}

// DO NOT MODIFY THE FOLLOWING

int main()
{
	vector<int> gold;
	int curr;
	while (cin >> curr) {
		gold.push_back(curr);
	}
	int answer = stealingGold(gold);
	ofstream out;
	out.open((USCusername+".txt").c_str(), ios::app);
	out << answer << endl;
	return 0;
}