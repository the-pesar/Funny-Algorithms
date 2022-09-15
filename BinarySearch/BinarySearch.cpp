#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
const int maxn = 1e5+10;

int n, k, a[maxn];

int main(){
    ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
    cin >> n;
    for (int i = 0; i < n; i++)
        cin >> a[i];

    sort(a , a + n);
    cin >> k;
    while(k--){
        int l ,r;
        cin >> l >> r;
        // finding l
        int first = -1 , end = n;
        while(end - first > 1){
            int mid = first+(end - first)/2;
            a[mid] < l ? first = mid : end = mid;
        }
        int l_1 = end + 1;

        // finding r
        first = -1,end = n;
        while(end - first > 1){
            int mid = first+(end-first)/2;
            a[mid] <= r ? first = mid : end = mid;
        }
        int r_1 = first + 1;
        cout<< r_1 - l_1 + 1 << ' ';
    }
}