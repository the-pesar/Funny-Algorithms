#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
const int maxn = 2e3+10;
int dp[maxn][maxn], a[maxn], b[maxn], n, m, sub[maxn];
int main(){
    ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
    cin >> n;
    for (int i = 1; i <= n; i++)
        cin >> a[i];
    cin >> m;
    for (int i = 1; i <= m; i++)
        cin >> b[i];
    for (int i = 1; i <= n; i++){
        for (int j = 1; j <= m; j++){
            if (a[i] == b[j]){
                dp[i][j] = max(dp[i - 1][j - 1] + 1, dp[i][j - 1]);
            } else{
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    cout << dp[n][m] << endl;
    /***************************************************/

    int i = n, j = m, inx = dp[n][m];
    while (i > 0 and j > 0) {
        if (a[i] == b[j]) {
            sub[inx] = a[i];
            i--;
            j--;
            inx--;
            continue;
        }
        dp[i - 1][j] > dp[i][j - 1] ? (i--) : (j--);
    }

    for (int i = inx + 1; i <= dp[n][m] ; i++)
        cout << sub[i] << ' ';
}
