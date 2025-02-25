#include <iostream>
using namespace std;

int nr_cif (int n) {
    if (n == 0) {
        return 1;
    }
    
    int cnt = 0;
    
    while (n) {
        n /= 10;
        cnt++;
    }
    
    return cnt;
}

int main()
{
    int n;
    cin >> n;
    cout << nr_cif(n);
    return 0;
}