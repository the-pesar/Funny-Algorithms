#include <bits/stdc++.h>
using namespace std;
// author : Mahsa_rz
const int MAXN = 1E5 + 3;

typedef long long ll;

ll n , arr[MAXN] , m;

int main(){

	ios::sync_with_stdio(false);
    cin.tie(0); cout.tie(0);

	cin >> n;
	for (int i = 0 ; i < n ; i++) {
		cin >> m;
		arr[m] += m; // calculate sum of numbers => points
	}
	for (int i = 2 ; i < MAXN ; i++) 
		arr[i] = max(arr[i - 1] , arr[i] + arr[i - 2]); // dp => check for max point

	cout << arr[MAXN - 1] << endl;
}
