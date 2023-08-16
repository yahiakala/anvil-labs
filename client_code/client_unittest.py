# SPDX-License-Identifier: MIT
# Copyright (c) 2021 anvilistas

__version__ = "0.0.1"

"""This is a test module."""
import unittest


class TestClass(unittest.TestCase):
    """This is a testclass"""

    def test_method_1(self):
        """Test Method 1."""
        assert True

    def test_method_2(self):
        """Test Method 2"""
        pass

    def test_method_final(self):
        """Final passing test."""
        pass
