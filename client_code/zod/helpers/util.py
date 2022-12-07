# SPDX-License-Identifier: MIT
# Copyright (c) 2021 anvilistas

__version__ = "0.0.1"


def enum(name, members):
    _ = type(name, (), {})()
    _.__dict__.update({member: member for member in members})
    return _


def join(iter, sep=" | "):
    return sep.join(map(repr, iter))


class DictLike:
    def __getitem__(self, key):
        return self.__dict__[key]

    def __setitem__(self, key, val):
        self.__dict__[key] = val

    def keys(self):
        return self.__dict__.keys()

    def __contains__(self, key):
        return key in self.__dict__

    def get(self, key, default=None):
        return self.__dict__.get(key, default)

    def __repr__(self):
        items = self.__dict__.items()
        return f"{type(self).__name__}({', '.join(f'{k}={v!r}' for k,v in items)})"

    def __str__(self):
        return str(self.__dict__)
