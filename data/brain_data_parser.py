import os
import csv
#split(open('C:\Users\edwar\OneDrive\Documents\test.csv', 'r'));

def split(filehandler, delimiter=',', row_limit=2000,
          output_name_template='part_%s.csv', output_path='./output/', keep_headers=False):
    """
    Splits a CSV file into multiple pieces.

    A quick bastardization of the Python CSV library.
    Arguments:
        `row_limit`: The number of rows you want in each output file
        `output_name_template`: A %s-style template for the numbered output files.
        `output_path`: Where to stick the output files
        `keep_headers`: Whether or not to print the headers in each output file.
    Example usage:

        >> from toolbox import csv_splitter;
        >> csv_splitter.split(csv.splitter(open('/home/ben/Desktop/lasd/2009-01-02 [00.00.00].csv', 'r')));

    """

    reader = csv.reader(filehandler, delimiter=',')
    current_piece = 1
    current_out_path = os.path.join(
        output_path, output_name_template % current_piece
    )
    current_out_writer = csv.writer(open(current_out_path, 'w'), delimiter=delimiter)
    current_limit = row_limit
    if keep_headers:
        headers = reader.next()
        current_out_writer.writerow(headers)
    for i, row in enumerate(reader):
        if i + 1 > current_limit:
            current_piece += 1
            current_limit = row_limit * current_piece
            current_out_path = os.path.join(
                output_path, output_name_template % current_piece
            )
            current_out_writer = csv.writer(open(current_out_path, 'w'))
            if keep_headers:
                current_out_writer.writerow(headers)
        current_out_writer.writerow(row)

if __name__ == "__main__":
    split(open('calvin.csv', 'r'));




"""import csv
import pandas as pd

with open('test.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    big_array = []
    little_array = []
    line_count = 0
    array_count = 0
    for row in csv_reader:
        if line_count < 2000:
            little_array[line_count] = csv_reader[row]
            line_count += 1
        else:
            big_array.append(little_array)
            array_count += 1
            line_count = 0
            break"""





