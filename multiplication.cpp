#include <iostream>
#include <set>
#include <vector>
#include <emscripten.h>

using namespace std;

int main() {
  int n = EM_ASM_INT({
    return parseInt(
    prompt("Enter the number of rows/columns in the multiplication table:")
    );
  });
  cout << "Calculating the distribution of numbers in " << n << "x" << n
       << " multiplication table..." << endl;
  set<int> numbersOccuringInTable;
  for (int i = 1; i <= n; i++)
    for (int j = 1; j <= n; j++)
      numbersOccuringInTable.insert(i * j);
  vector<int> frequency(n + 1);
  for (set<int>::iterator i = numbersOccuringInTable.begin();
       i != numbersOccuringInTable.end(); i++)
    frequency[(*i) / n]++;
  int intervalsOfGrowth = 0;
  for (int i = 1; i < n + 1; i++)
    if (frequency[i] > frequency[i - 1]) {
      cout << "Between " << (i - 1) * n << " and " << i * n - 1 << " there are "
           << frequency[i - 1] << " numbers." << endl;
      cout << "Between " << i * n << " and " << (i + 1) * n - 1 << " there are "
           << frequency[i] << " numbers." << endl;
      intervalsOfGrowth++;
    }
  cout << "There are " << intervalsOfGrowth << " intervals of growth." << endl;
}
